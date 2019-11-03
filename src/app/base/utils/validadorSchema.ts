import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/pages/dataSet/shared/log';

@Component({
    selector: 'app-validador-schema'
})

export class ValidadorSchema {

    log: Log = new Log();
    cabecalho: Array<String> = [
        "RA_Report #",
        "RA_CAERS Created Date",
        "AEC_Event Start Date",
        "PRI_Product Role",
        "PRI_Reported Brand/Product Name",
        "PRI_FDA Industry Code",
        "PRI_FDA Industry Name",
        "CI_Age at Adverse Event",
        "CI_Age Unit",
        "CI_Gender",
        "AEC_One Row Outcomes",
        "SYM_One Row Coded Symptoms"

    ];  

    constructor() {
        
    }

    ngOnInit() {

    }    

    public validaCabecalho(objeto: Array<Object>) : Promise<Log> {  
        return new Promise((resolve, reject) => {
            if (JSON.stringify(objeto) === JSON.stringify(this.cabecalho)) {                
                resolve(this.log = {nome: "Log Cabeçalho", descricao: "O cabeçalho do seu arquivo não possui erro!"});                    
            } else {
                resolve(this.log = {nome: "Erro Log Cabeçalho", descricao: "Verifique o cabeçalho do seu arquivo CSV!"});
            }
        });
    }

    public validaCamposVazios(objeto: Array<any>, index) : Promise<any> {         
        return new Promise((resolve, reject) => {  
            for (let i  in objeto) {
                if (objeto[i] == "") {
                    resolve(this.log = {nome: "Erro Campo Vazio", descricao: "Existem campos vazios na linha: " + index})                    
                }
            }
        });
    }

}