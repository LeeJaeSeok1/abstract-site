class Site {
    constructor() {
    this.boards = [];
    }
    addBoard(board) {
        for(let i=0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name) {
                throw new Error()
            }
        }
        board.flag = true;
        this.boards.push(board);
    }
    
    findBoardByName(boardname) {
        for(let i = 0; i < this.boards.length; i++) {
            if(this.boards[i].name === boardname) {
                return this.boards[i];
            }
        }
        throw new Error()
    }
}


class Board {
    constructor(name) {
        if(!name) {
            throw new Error();
        }
        this.name = name;
        this.flag = false;
        this.article = [];
    }

    publish(article) {
        if(this.flag !== true ){
            throw new Error();
        }
        article.flag = true;
        article.createdDate = new Date().toISOString()
        article.id = `${this.name}-${Math.random()}`
        this.article.push(article);
    }

    getAllArticles() {
        return this.article;
    }
}



class Article {
    constructor({subject, content, author}) {
        if(!subject||!content||!author){
            throw new Error();
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id;
        this.createdDate;
        this.flag = false;
        this.comment = [];
    }
    
    reply(comment) {
        if(this.flag === false){
            throw new Error();
        }
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment)
    }
    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor({content, author}){
        if(!content||!author){
            throw new Error();
        }
        this.content = content;
        this.author = author;
        this.createdDate;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};


