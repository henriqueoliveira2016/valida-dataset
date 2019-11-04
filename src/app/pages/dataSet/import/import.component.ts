import { Component, OnInit } from '@angular/core';
import { ValidadorSchema } from 'src/app/base/utils/validadorSchema';
import { LogService } from '../shared/log.service';
import { Log } from '../shared/log';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})

export class ImportComponent implements OnInit {
  fileToUpload: File = null;
  validadorSchema: ValidadorSchema = new ValidadorSchema();

  constructor(private logService: LogService) {

  }

  ngOnInit() {
  }

  handleFileInput(file: any) {
    this.csvParaArray(file)
  }

  public csvParaArray(fileInput: any) {
    //ler arquivo do input
    let fileReaded = fileInput.target.files[0];

    let reader: FileReader = new FileReader();
    reader.readAsText(fileReaded);

    reader.onload = (e) => {
      let csv: any = reader.result;
      let allTextLines = csv.split(/\r|\n|\r/);
      let headers = allTextLines[0].split(',');
      let lines = [];

      for (let i = 0; i < allTextLines.length; i++) {
        // dividir conteúdo com base em vírgula
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }

          lines.push(tarr);

          if (lines.length == 1) {
            this.validadorSchema.validaCabecalho(tarr).then(log => {
              this.logService.insert(log);
            });
          }

          if (lines.length > 1) {
            this.validadorSchema.validaCamposVazios(tarr, lines.length).then(log2 => {
              this.logService.insert(log2);
            })
          }
        }
      }
    }

  }

}
