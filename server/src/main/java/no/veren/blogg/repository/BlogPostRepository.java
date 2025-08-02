package no.veren.blogg.repository;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;
import java.util.stream.Stream;

import org.springframework.stereotype.Repository;

import no.veren.blogg.model.BlogPost;

@Repository
public class BlogPostRepository {
    public List<BlogPost> readAllTxtBlogPosts() throws FileNotFoundException {
        List<String> fileNames = getAllTxtFileTitles();
        List<BlogPost> blogPosts = new ArrayList<>();
        System.out.println(fileNames);

        for (String fileName : fileNames) {
            blogPosts.add(readTxtFile(fileName));
        }

        return blogPosts;
    }

    public BlogPost readTxtBlogPost(String title) throws FileNotFoundException {
        return readTxtFile(title);
    }

    private BlogPost readTxtFile(String filename) throws FileNotFoundException {
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

    private List<String> getAllTxtFileTitles() {
        return Stream.of(new File("./blogPosts").listFiles())
                .parallel()
                .map(File::getName)
                .filter(fn -> fn.endsWith(".txt"))
                .map(fn -> fn.substring(0, fn.length() - 4))
                .toList();
    }

    public void createBlogPostTxtFile(String title, String body, String passcode) throws IOException {
        // TODO: Boy add some security
        if (!passcode.equals("My secret passcode") && false) {
            System.out.println("Wrong passcode");
            return;
        }
        // Handle cases where title already exists
        if (getAllTxtFileTitles().contains(title)) {
            System.out.println("Wrong passcode");

            return;
        }
        // Get the correct date
        LocalDate currentTime = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd. MMM yyyy", Locale.ROOT);
        String writtenDate = currentTime.format(formatter);

        System.out.println("Dato i dag: " + writtenDate);
        BlogPost blogPost = new BlogPost(title, Arrays.asList(body), writtenDate, writtenDate);
        writeBlogTxtFile(blogPost);

    }

    public void updateBlogPostTxtFile(String title, List<String> body) {
        // Handle cases where title does not exist
    }

    private void writeBlogTxtFile(BlogPost blogPost) throws IOException {
        FileWriter writer = new FileWriter("./blogPosts/" + blogPost.getTitle() + ".txt");
        writer.write("Written " + blogPost.getDateCreated() + "\n");
        for (String paragraph : blogPost.getBody()) {
            writer.write(paragraph + "\n");
        }
        writer.close();
    }
}
