# WTExcel 2.0 - Validator
    idEventi -> identificano un tipo di evento player e il contenuto che viene riprodotto, in particolare può essere utilizzato anche per identificare la riproduzione di adv
    
    Parametri base utili per comprendere e studiare il comportamento dell'app e dell'utente sul player 
    Per ogni parametro esisterà una regex che ne identifica e ne attesa la validità, quindi ci si aspetta un metodo con in ingresso un valore X su cui effettuare il check
    e restituirà un valore true|false 

            ns_st_ev -> regex 1
            ns_st_po
            ns_st_ct  
            ns_st_ad
            ns_st_ui
            ns_st_cl 
            ns_st_st
            c6
            c4
            ns_st_tpr 
            ns_st_pr -> regex N

    
    play*null
    playvod
    pause*null
    pausevod
    hb*null
    hbvod
    end*null
    endvod
    TODO verificare caso pause - seek



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


