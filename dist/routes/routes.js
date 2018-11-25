"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// intancia del router
exports.router = express_1.Router();
exports.router.get('/', (req, resp, next) => {
    resp.status(400).json({
        ok: true,
        mensaje: 'Bienvenido al la server de difer'
    });
});
exports.router.get('/heroes', (req, resp, next) => {
    resp.status(200).json({
        ok: true,
        mensaje: "Mensaje realizado correctamente"
    });
});
exports.router.get('/heroe/:id', (req, resp) => {
    let id = req.params.id;
    resp.json({
        ok: true,
        mensaje: "Mensaje realizado correctamete",
        id: id
    });
});
