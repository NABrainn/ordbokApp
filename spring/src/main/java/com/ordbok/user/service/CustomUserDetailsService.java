package com.ordbok.user.service;

import com.ordbok.user.entity.User;
import com.ordbok.user.UserPrincipal;
import com.ordbok.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var maybeUser = userRepository.findByUsername(username);
        User user = null;

        if(maybeUser.isPresent()){
            user = maybeUser.get();
        }
        else {
            throw new UsernameNotFoundException("Not found!!");
        }

        return new UserPrincipal(user);
    }
}
