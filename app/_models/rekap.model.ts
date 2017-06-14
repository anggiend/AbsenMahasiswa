export class Mahasiswa {
    nim: string;
	nama: string;
	totaljam: number;
	keterangan: string;
	
	
    constructor(nim:string, nama: string, totaljam: number, keterangan: string) {
		this.nim = nim;
		this.nama = nama;
		this.totaljam = totaljam;
		this.keterangan = keterangan;
    }
}