package no.veren.blogg;

import java.util.List;

public record BlogPost(String title, List<String> body) {
}
