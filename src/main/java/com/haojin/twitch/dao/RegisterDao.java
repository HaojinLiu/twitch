package com.haojin.twitch.dao;

import com.haojin.twitch.entity.db.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.PersistenceException;

@Repository
public class RegisterDao {
    @Autowired
    private SessionFactory sessionFactory;
     public boolean register(User user) {
         Session session = null;
         try {
             session = sessionFactory.openSession();
             session.beginTransaction();
             session.save(user);
             session.getTransaction().commit();

         } catch(PersistenceException | IllegalStateException ex) {
             ex.printStackTrace();
             session.getTransaction().rollback();
             return false;

         } finally {
             if (session != null) {
                 session.close();
             }
         }
         return true;
     }
}
