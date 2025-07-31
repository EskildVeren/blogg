package no.veren.blogg.repository;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.stereotype.Repository;

import no.veren.blogg.BlogPost;

@Repository
public class BlogPostRepository {
    public List<BlogPost> readAllTxtBlogPosts() throws FileNotFoundException {
        List<BlogPost> blogPosts = new ArrayList<>();
        blogPosts.add(readTxtFile("guacamole"));
        return blogPosts;
    }

    public BlogPost readTxtFile(String filename) throws FileNotFoundException {
        String title = filename;
        String body = "";

        String path = "./blogPosts/" + title + ".txt";
        File file = new File(path);
        Scanner scanner = new Scanner(file);
        while (scanner.hasNextLine()) {
            body = body + scanner.nextLine() + "\n";
        }

        scanner.close();
        return new BlogPost(title, body);
    }
}
