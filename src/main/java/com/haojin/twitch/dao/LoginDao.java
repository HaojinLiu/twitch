package com.haojin.twitch.dao;

import com.haojin.twitch.entity.db.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDao {
    @Autowired
    private SessionFactory sessionFactory;

    public String verifyLogin(String userId, String password) {
        String name = "";
        Session session = null;
        try {
            session = sessionFactory.openSession();
            User user = session.get(User.class, userId);
            if(user != null && user.getPassword().equals((password))) {
                name = user.getFirstname();
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if(session != null) {
                session.close();
            }
        }
        return name;
    }
}
