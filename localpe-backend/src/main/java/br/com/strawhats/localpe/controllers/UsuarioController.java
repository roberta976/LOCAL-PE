package br.com.strawhats.localpe.controllers;

import br.com.strawhats.localpe.dao.UsuarioDao;
import br.com.strawhats.localpe.models.Usuario;
import br.com.strawhats.localpe.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*")
@RestController
@Controller
public class UsuarioController {
   @Autowired
   UsuarioService usuarioService;

    @GetMapping("/usuario/{id}")
    public Usuario getUsuario(@RequestParam Long id){
        return usuarioService.getUsuarioById(id);
    }

    @PutMapping("/usuario")
    public void editarUsuario(@RequestHeader Usuario usuario){
        usuarioService.editarUsuario(usuario);
    }

    @DeleteMapping("/usuario/{id}")
    public void deletarUsuario(@RequestParam Long id){
        usuarioService.deletarUsuarioByid(id);
    }

    @PostMapping("/usuario")
    public void cadastrarUsuario(@RequestHeader Usuario usuario){
        usuarioService.cadastrarUsuario(usuario);
    }



}
