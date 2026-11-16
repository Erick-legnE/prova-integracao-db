import conexao from './config/conexao.js'
import {Equipamento} from './model/Equipamento.js'

export async function criarEquipamento(equipamento) {
    const sql = "insert into calibracoes values ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel])
}

export async function listarEquipamentos() {
    const sql ="select * from calibracoes left join equipamentos on calibracoes.id = equipamentos.id;"
    return sql;

}

export async function buscarEquipamentoPorId(id) {
    const sql ="select * from calibracoes where calibracoes.id = ?"
    return sql
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "update calibracoes set equipamento_id = equipamento_id, data_calibracao = data_calibracao, resultado =resultado, responsavel = responsavel where calibracoes.id = ?"
    return sql
}

export async function excluirEquipamento(id) {
    const sql = "delete from calibracoes where calibracoes.id = ?;"
    return sql
}
