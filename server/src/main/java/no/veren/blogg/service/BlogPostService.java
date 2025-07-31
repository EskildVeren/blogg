package no.veren.blogg.service;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import no.veren.blogg.BlogPost;
import no.veren.blogg.repository.BlogPostRepository;

@Service
public class BlogPostService {
    private final BlogPostRepository repository;

    public BlogPostService(BlogPostRepository repository) {
        this.repository = repository;
    }

    public List<BlogPost> getAllBlogPosts() throws FileNotFoundException {
        return repository.readAllTxtBlogPosts();
        // return Arrays.asList(new BlogPost("Title vitle", "A tale of mole bole"));
    }
}
