package com.employee.crud.Service;

import com.employee.crud.Entity.Image;
import com.employee.crud.Repo.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepo imageRepo;

    private final String PATH = "D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\";

    public Long uploadImage(MultipartFile file) throws IOException {
        String fullPath = PATH+file.getOriginalFilename();
        Image pImage = new Image();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImagePath(fullPath);
        file.transferTo(new File(fullPath));
        imageRepo.save(pImage);
        return pImage.getId();
    }

    public byte[] downloadImage(Long id) throws IOException{
        Optional<Image> imageObject = imageRepo.findById(id);
        String fullPath = imageObject.get().getImagePath();
        return Files.readAllBytes(new File(fullPath).toPath());
    }
}
