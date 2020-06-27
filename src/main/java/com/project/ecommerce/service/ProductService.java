package com.project.ecommerce.service;

import com.project.ecommerce.model.Product;
import com.project.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        List<Product> list_of_product = new ArrayList<>();
        productRepository.findAll().forEach(list_of_product::add);
        return list_of_product;
    }

    public Product getProductById(int id) {
        Optional<Product> product = productRepository.findById(id);
        if (!product.isPresent()) {
            throw new NoSuchElementException();
        }
        return product.get();
    }

    public void addNewProduct(Product product) {
        productRepository.save(toEntity(product));
    }

    private Product toEntity(Product product) {
        Product entity = new Product();
        entity.setProductName(product.getProductName());
        entity.setProductPrice(product.getProductPrice());
        entity.setProductDescription(product.getProductDescription());
        return entity;
    }
}
