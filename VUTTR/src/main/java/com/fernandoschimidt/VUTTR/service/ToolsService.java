package com.fernandoschimidt.VUTTR.service;

import com.fernandoschimidt.VUTTR.dto.ToolsDTO;
import com.fernandoschimidt.VUTTR.entity.Tools;
import com.fernandoschimidt.VUTTR.reposiotry.ToolsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ToolsService {

    private final ToolsRepository toolsRepository;

    public Tools create(ToolsDTO req) {
        Tools tools = new Tools();
        tools.setTitle(req.title());
        tools.setLink(req.link());
        tools.setDescription(req.description());
        tools.setTags(req.tags());

        return toolsRepository.save(tools);
    }

    public List<Tools> listAll() {
        List<Tools> tools = toolsRepository.findAll();
        return tools;
    }

    public void delete(Long id) throws Exception {
        toolsRepository.findById(id)
                .orElseThrow(() -> new Exception("Tool not found"));
        toolsRepository.deleteById(id);
    }

    public List<Tools> findByTags(String tag) {
        List<Tools> tools = toolsRepository.findAll();
        List<Tools> toolsByTags = new ArrayList<>();
        for (Tools tool : tools) {
            for (String tags : tool.getTags()) {
                if (tag.equals(tags)) {
                    toolsByTags.add(tool);
                }
            }
        }
        return toolsByTags;
    }
}
