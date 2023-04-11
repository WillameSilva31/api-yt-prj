import PoolConnection from "mysql2/typings/mysql/lib/PoolConnection"
import { pool } from "../mysql"
import { Response } from "express"

export const connect = ({ reponseToTreatError }: { reponseToTreatError: Response }): Promise<PoolConnection> => {
  const promiseConnection = new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reponseToTreatError.status(500).json(err)

      resolve(connection)
    })
  })

  return promiseConnection as Promise<PoolConnection>;
}

export const connectWithoutExpress = (): Promise<PoolConnection> => {
  const promiseConnection = new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err)

      resolve(connection)
    })
  })

  return promiseConnection as Promise<PoolConnection>;
}