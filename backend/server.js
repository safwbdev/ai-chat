import express from "express";
import ImageKit from "imagekit";
import cors from 'cors';
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import dotenv from 'dotenv';
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import path from "path";
import url, { fileURLToPath } from "url";

const port = process.env.PORT || 3000;

const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('CONNECTED TO DB!');
    } catch (err) {
        console.log(err);

    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.get("/api/test1", (req, res) => {
    res.send("SUCCESS!!!")
    console.log("SUCCESS!!!");

})

app.get("/api/test2",
    ClerkExpressRequireAuth(),
    (req, res) => {
        const { userId } = req.auth;
        res.send("SUCCESS!!!")
        console.log("SUCCESS!!!", userId);
    })

app.post("/api/chats",
    ClerkExpressRequireAuth(),
    async (req, res) => {
        const { userId } = req.auth;
        const { text } = req.body;
        try {
            const newChat = new Chat({
                userId: userId,
                history: [{ role: "user", parts: [{ text }] }]
            })

            const savedChat = await newChat.save();

            const userChats = await UserChats.find({ userId: userId })

            if (!userChats.length) {
                const newUserChats = new UserChats({
                    userId: userId,
                    chats: [{
                        _id: savedChat.id,
                        title: text.substring(0, 40)
                    }]
                })
                await newUserChats.save();
            } else {
                await UserChats.updateOne({ userId: userId }, {
                    $push: {
                        chats: {
                            _id: savedChat._id,
                            title: text.substring(0, 40)
                        }
                    }
                })
                res.status(201).send(newChat._id)
            }

        } catch (err) {
            console.log(err);
            res.status(500).send("There was an error creating the chat")


        }

    })

app.get("/api/userchats",
    ClerkExpressRequireAuth(),
    async (req, res) => {
        console.log('==================');
        console.log(req.auth);


        const { userId } = req.auth;
        try {
            const userChats = await UserChats.find({ userId })
            res.status(200).send(userChats[0].chats)
        } catch (err) {
            console.log(err);
            res.status(500).send("There was an error fetching user chats")
        }
    })

app.get("/api/chats/:id",
    ClerkExpressRequireAuth(),
    async (req, res) => {
        const { userId } = req.auth;
        try {
            const chat = await Chat.findOne({ _id: req.params.id, userId })
            res.status(200).send(chat)
        } catch (err) {
            console.log(err);
            res.status(500).send("There was an error fetching chat")
        }
    })

app.put("/api/chats/:id",
    ClerkExpressRequireAuth(),
    async (req, res) => {
        const { userId } = req.auth;

        const { question, answer, img } = req.body;

        const newItems = [
            ...(question
                ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
                : []),
            { role: "model", parts: [{ text: answer }] },
        ];

        try {
            const updatedChat = await Chat.updateOne(
                { _id: req.params.id, userId },
                {
                    $push: {
                        history: {
                            $each: newItems,
                        },
                    },
                }
            );
            res.status(200).send(updatedChat);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error adding conversation!");
        }
    });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send("Unauthenticated!");
});

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

app.listen(port, () => {
    connect()
    console.log("Running on port 3000");
})

