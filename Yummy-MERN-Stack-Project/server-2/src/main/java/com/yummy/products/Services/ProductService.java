package com.yummy.products.Services;

import com.yummy.products.Entity.Product;
import com.yummy.products.ProductDto.ProductDTO;
import com.yummy.products.ProductDto.Stats;
import com.yummy.products.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<ProductDTO> getProducts() {
        List<Product> products = productRepo.findAll();

        return products.stream()
                .map(this::mapToProductDTO)
                .collect(Collectors.toList());
    }

    private ProductDTO mapToProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setTitle(product.getTitle());
        productDTO.setDescription(product.getDescription());
        productDTO.setInfo(product.getInfo());
        productDTO.setPrice(product.getPrice());
        productDTO.setImage(product.getImage());

        // Create and set the Stats object
        Stats stats = new Stats();
        stats.setRating(product.getRating());
        stats.setReviewCount(product.getReviewCount());
        productDTO.setStats(stats);

        return productDTO;
    }

//    public List<Product> getProducts() {
//        return productRepo.findAll();
//    }

}