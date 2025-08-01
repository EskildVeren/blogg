package no.veren.blogg.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import no.veren.blogg.model.BlogPost;
import no.veren.blogg.repository.BlogPostRepository;

@Service
public class BlogPostService {
    private final BlogPostRepository repository;

    public BlogPostService(BlogPostRepository repository) {
        this.repository = repository;
    }

    public List<BlogPost> getAllBlogPosts() throws FileNotFoundException {
        return repository.readAllTxtBlogPosts();
    }

    public BlogPost getBlogPost(String title) throws FileNotFoundException {
        return repository.readTxtBlogPost(title);
    }

    public void writeBlogPost(String title, List<String> body, String passcode) throws IOException {
        repository.createBlogPostTxtFile(title, body, passcode);
    }
}
