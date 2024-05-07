package com.fernandoschimidt.VUTTR.controller;

import com.fernandoschimidt.VUTTR.dto.ToolsDTO;
import com.fernandoschimidt.VUTTR.entity.Tools;
import com.fernandoschimidt.VUTTR.service.ToolsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/tools")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ToolsController {

    private final ToolsService toolService;

    @PostMapping
    private ResponseEntity<Tools> create(@RequestBody ToolsDTO data) {
        Tools tool = toolService.create(data);

        return new ResponseEntity<>(tool, HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<Tools>> findAll() {
        List<Tools> tools = toolService.listAll();
        return ResponseEntity.ok().body(tools);
    }

    @GetMapping("/tags")
    private ResponseEntity<List<Tools>> findByTag(@Param("tag") String tag) {
        List<Tools> toolsByTag = toolService.findByTags(tag);
        return ResponseEntity.ok().body(toolsByTag);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") Long id) throws Exception {
        toolService.delete(id);
    }
}
