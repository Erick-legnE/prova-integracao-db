import conexao from './config/conexao.js'

export async function criarCalibracao(calibracao) {
    const sql = "insert into equipamentos values ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel])
    return resultado
}
export async function listarCalibracoes() {
    const sql = "select * from calibracoes"
    const [resultado] = await conexao.execute(sql)
    return resultado
}

export async function listarCalibracoesDetalhadas() {
    const sql ="select * from calibracoes left join equipamentos on calibracoes.id = equipamentos.id;"
    const [resultado] = await conexao.execute(sql)
    return resultado
}

export async function buscarCalibracaoPorId(id) {
    const sql ="select * from calibracoes where calibracoes.id = ?"
    const [resultado] = await conexao.execute(sql)
    return resultado
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "update calibracoes set equipamento_id = equipamento_id, data_calibracao = data_calibracao, resultado =resultado, responsavel = responsavel where calibracoes.id = ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel])
    return resultado
}

export async function excluirCalibracao(id) {
    const sql = "delete from calibracoes where calibracoes.id = ?;"
    const [resultado] = await conexao.execute(sql)
    return resultado
}
