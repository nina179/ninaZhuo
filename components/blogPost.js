class BlogPost {

    /* 
    sets the value for each defined property
        title: string indicating blog post title
        date: string indicating time of writing
        location: string indicating location of writing
        content: .txt or .md file with actual blog content
    */
    constructor(title, date, location, content) {
        this.title = title; 
        this.date = date;
        this.location = location;
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
    getLocation() {
        return this.location;
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
    updateLocation(newLocation) {
        this.location = newLocation;
    }
    updateContent(newContent) {
        this.content = newContent;
    }

};
