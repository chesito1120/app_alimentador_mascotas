const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
      console.log('No se proporcionó un token de autenticación');
      return res.status(401).json({ msg: 'No se proporcionó un token de autenticación' });
    }
  
    if (!authHeader.startsWith('Bearer ')) {
      console.log('Formato de token inválido');
      return res.status(401).json({ msg: 'Formato de token inválido' });
    }
  
    const token = authHeader.replace('Bearer ', '');
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id); 
      
      if (!req.user) {
        console.log('Usuario no encontrado');
        return res.status(401).json({ msg: 'Usuario no encontrado' });
      }
      
      next();
    } catch (err) {
      console.error('Token inválido:', err.message);
      res.status(401).json({ msg: 'Token inválido' });
    }
  };
  