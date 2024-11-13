class WorkSample {
    /* 
    sets the value for each defined property
        title: string indicating blog post title
        date: string indicating time of writing
        location: string indicating location of writing
        content: .txt or .md file with actual blog content
    */
        constructor(title, date, genre, content) {
            this.title = title; 
            this.date = date;
            this.genre = genre;
            this.content = content;
        }
        
        /*
        grabs value for each specified property (for eventual seraching)
        */
        getTitle() {
            return this.title;
        }
        getDate() {
            return this.date;
        }
        getGenre() {
            return this.genre;
        }
        getContent() {
            return this.content;
        }
    
        /*
        updates the value for each specified property
        */
        updateTitle(newTitle) {
            this.title = newTitle
        }
        updateDate(newDate) {
            this.date = newDate;
        }
        updateGenre(newGenre) {
            this.genre = newGenre;
        }
        updateContent(newContent) {
            this.content = newContent;
        }
    
    };
    