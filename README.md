# WTExcel
Batch per lo spacchettamento delle chiamate WT

##HOW TO USE
L'applicazione si sviluppa interamente sul file index.js, all'interno del quale è presente una var array = []. 
Dentro l'array andrà aggiunto il txt elaborato dal batch di WT, in cui sarà necessario aggiungere le "virgolette" e la virgola "," finale. 

Per fare questo, consiglio di selezionare con vscode il primo "wt?" del txt e premere ctrl + d per procedere alla selezione multiline, con "tasto inizio" 
ed aggiungere virgoletta. 
Lo stesso va fatto, premendo il "tasto fine", per aggiungere la virgoletta di chiusura e la virgola. 


###LAUNCHING
In console, lanciare il batch con node index.js 

####EXCEL OUTPUT 
L'excel verrà creato all'interno della cartella "export", per considerare il lavoro finito però andrà aggiunto una colonna "description" in posizione A:1
per procedere con l'inserimento dello useCase nel quale si è scatenato quel track. 
Ricordo inoltre che il file si svilippa su tre sheet e che andranno modificati tutti e tre. 

Nella cartella export è presente un file d'esempio.


