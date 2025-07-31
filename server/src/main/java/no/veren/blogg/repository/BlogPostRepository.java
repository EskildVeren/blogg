package no.veren.blogg.repository;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Stream;

import org.springframework.stereotype.Repository;

import no.veren.blogg.BlogPost;

@Repository
public class BlogPostRepository {
    public List<BlogPost> readAllTxtBlogPosts() throws FileNotFoundException {
        List<String> fileNames = getAllTxtFileTitles("./blogPosts");
        List<BlogPost> blogPosts = new ArrayList<>();
        System.out.println(fileNames);

        for (String fileName : fileNames) {
            blogPosts.add(readTxtFile(fileName));
        }

        return blogPosts;
    }

    public BlogPost readTxtFile(String filename) throws FileNotFoundException {
        String title = filename;
        List<String> body = new ArrayList<>();

        String path = "./blogPosts/" + title + ".txt";
        File file = new File(path);
        Scanner scanner = new Scanner(file);
        while (scanner.hasNextLine()) {
            body.add(scanner.nextLine());
        }

        scanner.close();
        return new BlogPost(title, body);
    }

    public List<String> getAllTxtFileTitles(String path) {
        return Stream.of(new File(path).listFiles())
                .parallel()
                .map(File::getName)
                .filter(fn -> fn.endsWith(".txt"))
                .map(fn -> fn.substring(0, fn.length() - 4))
                .toList();
    }
}
