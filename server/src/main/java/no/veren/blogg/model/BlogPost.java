package no.veren.blogg.model;

import java.util.List;

public record BlogPost(String title, List<String> body) {
}
