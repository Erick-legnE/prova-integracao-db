import conexao from './config/conexao.js'
import {Calibracao} from './model/Calibracao.js'

export async function criarCalibracao(calibracao) {
    const sql = "insert into calibracoes values ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel])
}
export async function listarCalibracoes() {
    const sql = "select * from calibracoes"
    return sql
}

export async function listarCalibracoesDetalhadas() {
    const sql ="select * from calibracoes where "
}

export async function buscarCalibracaoPorId(id) {
}

export async function atualizarCalibracao(id, calibracao) {
}

export async function excluirCalibracao(id) {
}
