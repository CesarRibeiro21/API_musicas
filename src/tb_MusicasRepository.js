import con from './conection.js'

export async function inserirMusicas(musica) {
    const comando = `
    INSERT INTO tb_musica(nm_musica,ds_artista,url_musica,dt_lancamento,qtd_visualizacoes,hr_duracao, bt_destaque,dt_idioma)
        values (?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [musica.nome, musica.artista, musica.url, musica.lancamento, musica,visualizacoes, musica.duracao, musica.destaque, musica.idioma])
    let info = resposta[0]

    return info.inserirId
};