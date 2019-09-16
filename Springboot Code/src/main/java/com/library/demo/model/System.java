package com.library.demo.model;
import javax.persistence.*;


@Entity
@Table(name="book")
public class System {
	
	@Id
    private long isbn;
    private String bookname;
    private String authorname;
    private int copy;
    public int getCopy() {
        return copy;
    }
    public void setCopy(int  copy) {
        this.copy = copy;
    }
 
    public long getIsbn() {
        return isbn;
    }
    public void setIsbn(long  isbn) {
        this.isbn = isbn;
    }
    
  
    public String getBookname() {
        return bookname;
    }
    public void setBookname(String bookname) {
        this.bookname = bookname;
    }
    
    public String getAuthorName() {
        return authorname;
    }
    public void setAuthorName(String authorname) {
        this.authorname = authorname;
    }
    


}
