package ru.neighbors.neighbors.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
public class RegistrationUserDto {
    @NotBlank
    private String firstName;
    private String lastName;
    private String middleName;
    private String city;
    private String street;
    private Integer houseNumber;
    private String login;
    private String password;
}