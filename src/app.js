import * as db from '../src/tb_MusicasRepository.js'
import { Router } from 'express'

const endpoints = Router;

endpoints.get('/tb_Musicas', async (req,resp) => {
    try {
        let registros = await db.consultarttb_Musicas();
        resp.send(registros);
    }
    catch (err){
        resp.send(400).send({
            erro: err.message
        })
    }
})

endpoints.post()