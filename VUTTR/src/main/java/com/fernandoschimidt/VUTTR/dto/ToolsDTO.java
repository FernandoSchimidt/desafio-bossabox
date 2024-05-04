package com.fernandoschimidt.VUTTR.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ToolsDTO(
        Long id,
        @NotNull(message = "campo obrigatorio")
        @NotBlank(message = "Campo obrigatorio")
        String title,
        @NotNull(message = "campo obrigatorio")
        @NotBlank(message = "Campo obrigatorio")
        String link,
        @NotNull(message = "campo obrigatorio")
        @NotBlank(message = "Campo obrigatorio")
        String description,
        @NotNull(message = "campo obrigatorio")
        @NotBlank(message = "Campo obrigatorio")
        String[] tags
) {

}
