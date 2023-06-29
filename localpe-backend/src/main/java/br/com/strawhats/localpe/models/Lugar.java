package br.com.strawhats.localpe.models;

import br.com.strawhats.localpe.enums.Nota;

import javax.persistence.*;
import java.util.List;
@Entity
public class Lugar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @Lob
    private String descricao;
    private String coordenadas;
    private String categoria;
    private Nota nota;
    @ElementCollection
    private List<String> caracteristicas;
    @OneToMany
    private List<Comentario> comentarios;
    @ElementCollection
    private List<String> fotos;
    private Long visitas;

    public Lugar(Long id, String nome, String descricao, String coordenadas, String categoria, Nota nota, List<String> caracteristicas, List<Comentario> comentarios, List<String> fotos, Long visitas) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.coordenadas = coordenadas;
        this.categoria = categoria;
        this.nota = nota;
        this.caracteristicas = caracteristicas;
        this.comentarios = comentarios;
        this.fotos = fotos;
        this.visitas = visitas;
    }

    public Lugar() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(String coordenadas) {
        this.coordenadas = coordenadas;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Nota getNota() {
        return nota;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

    public List<String> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<String> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }

    public Long getVisitas() {
        return visitas;
    }

    public void setVisitas(Long visitas) {
        this.visitas = visitas;
    }
}