package io.github.vinaypurohit31.inboxai.app;

import lombok.Data;

@Data
public class EmailRequest {

    private  String emailContent;
    private String tone;
}
