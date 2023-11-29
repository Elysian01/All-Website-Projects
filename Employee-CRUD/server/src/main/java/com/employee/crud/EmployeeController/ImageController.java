package com.employee.crud.EmployeeController;

import com.employee.crud.Entity.Image;
import com.employee.crud.Repo.ImageRepo;
import com.employee.crud.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;
import java.util.Optional;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @Autowired
    private ImageRepo imageRepo;

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping("/upload")
    public Long uploadImage(@RequestParam("productImage") MultipartFile file) throws IOException {
        return imageService.uploadImage(file);
    }

//    @GetMapping("/download/{id}")
//    public ResponseEntity<byte[]> downloadImage(@PathVariable Long id) throws IOException {
//        byte[] image = imageService.downloadImage(id);
//        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);  
//    }

    @GetMapping("/download/{id}")
    public ResponseEntity<String> downloadImage(@PathVariable Long id) {
        Optional<Image> imageObject = imageRepo.findById(id);

        if (imageObject.isPresent()) {
            String fullPath = imageObject.get().getImagePath();

            try {
                // Read the image file into a byte array
                byte[] imageBytes = Files.readAllBytes(new File(fullPath).toPath());

                // Encode the byte array to base64
                String base64Encoded = Base64.getEncoder().encodeToString(imageBytes);

                // Set the content type and create HttpHeaders
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG); // Adjust based on your image type

                // Attach base64 data to the response headers
                headers.add("Content-Disposition", "inline;filename=" + id + ".jpg"); // Adjust the filename

                return ResponseEntity.ok()
                        .headers(headers)
                        .body(base64Encoded);
            } catch (Exception e) {
                e.printStackTrace();
                // Handle exceptions appropriately, e.g., return a 404 response
                return ResponseEntity.notFound().build();
            }
        } else {
            // Handle the case where the image with the given id is not found
            return ResponseEntity.notFound().build();
        }
    }
}