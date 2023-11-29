package com.yummy.products.Controllers;

import com.yummy.products.Entity.Product;
import com.yummy.products.ProductDto.ProductDTO;
import com.yummy.products.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/products")
    public List<ProductDTO> getEmployees() {
        return productService.getProducts();
    }
}


