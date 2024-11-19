import express from "express";
import { getTransaksi, createTransaksi, deleteTransaksi, updateTransaksi, getbydateTransaksi } from "../controllers/transaksiController";
// import { transaksiReport } from "../controllers/reportController";

const app = express();

app.use(express.json());

/** Route untuk mendapatkan semua transaksi */
app.get(`/`, getTransaksi);

// route untuk mendapatkan transaksi berdasarkan tanggal
app.get('/date', getbydateTransaksi);

/** Route untuk membuat transaksi baru */
app.post(`/`, createTransaksi);

/** Route untuk mengupdate transaksi */
app.put(`/:id`, updateTransaksi);

/** Route untuk menghapus transaksi */
app.delete(`/:id`, deleteTransaksi);

/** Route untuk mendapatkan nota transaksi berdasarkan id */
//  app.get(`/report/:id`, transaksiReport);

export default app;