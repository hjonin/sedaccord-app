import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ArchiveTransfer, Office} from '../dtos/archive-transfer';
import {FileNode} from '../dtos/file';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const transferringAgencies: Office[] = [
      {id: 1, name: 'DGT', description: 'Direction générale du travail'},
      {id: 2, name: 'DGAS', description: 'Direction générale de l\'action sociale'},
      {id: 3, name: 'DGOS', description: 'Direction générale de l\'offre de soin'},
      {id: 4, name: 'DGCS', description: 'Direction générale de la cohésion sociale'},
      {id: 5, name: 'DRH', description: 'Direction des ressources humaines'}
    ];
    const creators: Office[] = [
      {id: 1, name: 'DGT', description: 'Direction générale du travail'},
      {id: 2, name: 'DGAS', description: 'Direction générale de l\'action sociale'},
      {id: 3, name: 'DGOS', description: 'Direction générale de l\'offre de soin'},
      {id: 4, name: 'DGCS', description: 'Direction générale de la cohésion sociale'},
      {id: 5, name: 'DRH', description: 'Direction des ressources humaines'}
    ];
    const classification = [
      {
        id: 1,
        name: 'Gestion individuelle',
        children: [
          {id: 11, name: 'Dossiers de carrière'},
          {id: 12, name: 'Dossiers d’accidents du travail'},
          {id: 13, name: 'Dossiers de pension et réversion'},
          {id: 14, name: 'Dossiers de paie'},
          {id: 15, name: 'Dossiers individuels du comité médical supérieur'},
          {id: 16, name: 'Dossiers médicaux'}]
      },
      {
        id: 2,
        name: 'Gestion collective',
        children: [
          {id: 21, name: 'Commissions et comités'},
          {id: 22, name: 'Effectifs'},
          {
            id: 23,
            name: 'Action sociale en faveur des agents',
            children: [{id: 231, name: 'Politique d’action sociale'}, {id: 232, name: 'Prestations sociales'}]
          },
          {id: 24, name: 'Recrutements et concours'},
          {id: 25, name: 'Formation Relation avec les syndicats'}
        ]
      }
    ];
    const fileTreeData1: FileNode[] = [
      {
        isDirectory: true,
        name: 'Agents partis en janvier 2017',
        startDate: new Date(2017, 0, 1),
        endDate: new Date(2020, 0, 31),
        size: 948.55
      },
      {
        isDirectory: true,
        name: 'Agents partis en février 2017',
        startDate: new Date(2020, 1, 1),
        endDate: new Date(2020, 1, 28),
        size: 948.55
      },
      {
        isDirectory: true,
        name: 'Agents partis en mars 2017',
        startDate: new Date(2017, 2, 1),
        endDate: new Date(2017, 2, 31),
        size: 948.55
      },
      {
        isDirectory: true,
        name: 'Agents partis en avril 2017',
        startDate: new Date(2017, 3, 1),
        endDate: new Date(2017, 3, 30),
        size: 948.55,
        children: [
          {
            isDirectory: true,
            name: 'Agents_A',
            startDate: new Date(2017, 3, 1),
            endDate: new Date(2017, 3, 30),
            size: 948.55
          },
          {
            isDirectory: true,
            name: 'Agents_B',
            startDate: new Date(2017, 3, 1),
            endDate: new Date(2017, 3, 30),
            size: 948.55
          },
          {
            isDirectory: true,
            name: 'Agents_C',
            startDate: new Date(2017, 3, 1),
            endDate: new Date(2017, 3, 30),
            size: 948.55,
            children: [
              {
                isDirectory: true,
                name: 'CARPENTAS Isabelle',
                startDate: new Date(2020, 11, 22, 15, 0, 0),
                endDate: new Date(2020, 11, 22, 15, 0, 0),
                size: 948.55
              },
              {
                isDirectory: true,
                name: 'CHAMONIX Jean-Marc',
                startDate: new Date(2020, 11, 22, 15, 0, 0),
                endDate: new Date(2020, 11, 22, 15, 0, 0),
                size: 948.55
              },
              {
                isDirectory: true,
                name: 'CRIPOUX Sarah',
                startDate: new Date(2020, 11, 22, 15, 0, 0),
                endDate: new Date(2020, 11, 22, 15, 0, 0),
                size: 948.55,
                children: [
                  {
                    isDirectory: false,
                    name: 'CV',
                    startDate: new Date(2010, 3, 2),
                    endDate: new Date(2010, 3, 2),
                    size: 948.55,
                    format: 'PDF'
                  },
                  {
                    isDirectory: false,
                    name: 'CR_evaluation_2015',
                    startDate: new Date(2015, 0, 11),
                    endDate: new Date(2015, 0, 11),
                    size: 948.55,
                    format: 'docx'
                  },
                  {
                    isDirectory: false,
                    name: 'Arrêté de nomination',
                    startDate: new Date(2014, 2, 31),
                    endDate: new Date(2014, 2, 31),
                    size: 948.55,
                    format: 'docx'
                  },
                  {
                    isDirectory: false,
                    name: '2011_07_26_attestation_formation_gestes_posture',
                    startDate: new Date(2011, 6, 26),
                    endDate: new Date(2011, 6, 26),
                    size: 948.55,
                    format: 'docx'
                  },
                  {
                    isDirectory: false,
                    name: 'Evaluation_2016_CR',
                    startDate: new Date(2014, 0, 6),
                    endDate: new Date(2014, 0, 6),
                    size: 948.55,
                    format: 'rtf'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    const transfer1 = new ArchiveTransfer(
      1111,
      'Dossiers de carrière - Agents partis en 2017 et 2018',
      'Dossiers de carrière d’agents du ministère des affaires sociales ayant quitté leurs fonctions en 2017 et 2018. Les dossiers sont classés par mois puis par ordre alphabétique.',
      new Date(1978, 0, 11),
      new Date(2018, 10, 27),
      transferringAgencies[4],
      creators[4]
    );
    transfer1.lastModificationDate = new Date(2021, 0, 30, 15, 0, 0);
    transfer1.addPackage(1, '', classification[0].children[0], fileTreeData1);
    const archiveTransfers = [
      new ArchiveTransfer(
        2222,
        'Dossiers médicaux – Agents partis en 2018',
        'Dossiers médicaux des agents du ministère des affaires sociales ayant quitté leurs fonctions en 2018. Les dossiers sont classés par mois puis par ordre alphabétique.',
        new Date(1965, 0, 4),
        new Date(2018, 7, 18),
        transferringAgencies[4],
        creators[4]
      ),
      transfer1
    ];
    const comments = [
      {
        date: new Date(2021, 0, 28, 15, 0, 0),
        user: 'Caroline',
        text: 'J\'ai un doute sur le format de ce fichier, convient-il pour le versement ?',
        file: 'Evaluation_2016_CR'
      },
      {
        date: new Date(2021, 1, 5, 15, 0, 0),
        user: 'Sophie Bertrand',
        text: 'Oui, il convient tout à fait.',
        file: 'Evaluation_2016_CR'
      }
    ];
    return {
      transferringAgencies,
      creators,
      classification,
      archiveTransfers,
      comments
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(archiveTransfers: ArchiveTransfer[]): number {
    return archiveTransfers.length > 0 ? Math.max(...archiveTransfers.map(hero => hero.id)) + 1 : 11;
  }
}
