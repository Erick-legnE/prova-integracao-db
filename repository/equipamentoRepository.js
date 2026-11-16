import conexao from './config/conexao.js'
import {Equipamento} from './model/Equipamento.js'

export async function criarEquipamento(equipamento) {
    const sql = "insert into equipamentos values ?"
    const [resultado] = await conexao.execute(sql,[codigoPatrimonio, nome, setor, status])
}

export async function listarEquipamentos() {
    const sql = "select * from equipamentos"
    const [resultado] = await conexao.execute(sql)
    return resultado
}

export async function buscarEquipamentoPorId(id) {
    const sql ="select * from equipamentos left join equipamentos on equipamentos.id = equipamentos.id;"
    const [resultado] = await conexao.execute(sql)
    return resultado
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "update equipamentos set codigoPatrimonio = codigoPatrimonio, nome = nome, setor = setor where equipamentos.id = ?"
    const [resultado] = await conexao.execute(sql,[codigoPatrimonio, nome, setor])
    return resultado
}

export async function excluirEquipamento(id) {
    const sql = "delete from equipamentos where equipamentos.id = ?;"
    const [resultado] = await conexao.execute(sql)
    return resultado
}
