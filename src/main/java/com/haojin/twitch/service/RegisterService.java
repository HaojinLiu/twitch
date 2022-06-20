package com.haojin.twitch.service;

import com.haojin.twitch.dao.RegisterDao;
import com.haojin.twitch.entity.db.User;
import com.haojin.twitch.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class RegisterService {
    @Autowired
    private RegisterDao registerDao;

    public boolean register(User user) throws IOException {
        user.setPassword(Util.encryptPassword(user.getUserId(), user.getPassword()));
        return registerDao.register(user);
    }

}
