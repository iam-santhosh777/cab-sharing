import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Button,
  Typography,
  IconButton,
  Divider,
  Avatar,
  Chip,
  Stack,
  Card,
  CardContent,
  Fade,
  Zoom,
  Slide,
} from '@mui/material';
import {
  Close as CloseIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Apple as AppleIcon,
  GitHub as GitHubIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
  AutoAwesome as AutoAwesomeIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

// Floating particles animation for crazy, modern background
function FloatingParticles({ theme }) {
  const colors = theme === 'light'
    ? ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
    : ['#f093fb', '#f5576c', '#43e97b', '#38f9d7', '#667eea'];
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    size: Math.random() * 14 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
  }));

  // Insert keyframes once (for all particles)
  React.useEffect(() => {
    if (!document.getElementById('crazy-particles-keyframes')) {
      const style = document.createElement('style');
      style.id = 'crazy-particles-keyframes';
      style.innerHTML = `
        @keyframes float-particle-crazy {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.15); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <Box
          key={p.id}
          className="crazy-particle"
          sx={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 60% 40%, ${p.color} 60%, transparent 100%)`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.38,
            filter: 'blur(1.5px)',
            animation: `float-particle-crazy ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </Box>
  );
}


// Social login button with modern/crazy style
const SocialButton = ({ provider, icon, color, gradient, onClick, isLoading }) => (
  <Button
    fullWidth
    variant="contained"
    size="large"
    startIcon={icon}
    onClick={onClick}
    disabled={isLoading}
    sx={{
      mb: 2,
      py: 2,
      px: 3,
      background: gradient || `linear-gradient(135deg, ${color}22, ${color}44)`,
      border: `2px solid ${color}33`,
      color: '#fff',
      borderRadius: '16px',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 600,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${color}44, transparent)`,
        transition: 'left 0.5s',
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 25px ${color}33`,
        '&:before': {
          left: '100%',
        },
      },
      '&:active': {
        transform: 'translateY(0px)',
      },
    }}
  >
    {isLoading ? (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 20,
            height: 20,
            border: '2px solid #ffffff33',
            borderTop: '2px solid #ffffff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
        Connecting...
      </Box>
    ) : (
      `Continue with ${provider}`
    )}
  </Button>
);

// Main AuthContent
function AuthContent({ isSignUp, toggleMode, handleSocialLogin, isLoading }) {
  const { actualMode } = useTheme();
  return (
    <Fade in={!isLoading} timeout={300}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Animated header with avatar/icon */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                background: actualMode === 'light'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                margin: '0 auto',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.1)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            >
              {isSignUp ? <PersonAddIcon sx={{ fontSize: 40 }} /> : <LoginIcon sx={{ fontSize: 40 }} />}
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                top: -5,
                right: -5,
                animation: 'bounce 1s ease-in-out infinite',
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <AutoAwesomeIcon sx={{ color: '#ffd700', fontSize: 24 }} />
            </Box>
          </Box>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ 
              mb: 1,
              background: actualMode === 'light'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            {isSignUp ? 'Join the Ride!' : 'Welcome Back!'}
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              color: actualMode === 'light' ? '#666' : '#ccc',
              fontSize: '1.1rem',
              mb: 2,
            }}
          >
            {isSignUp 
              ? '🚗 Start your journey with us today'
              : '🎉 Ready for your next adventure?'
            }
          </Typography>
          {/* Feature chips */}
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
            <Chip 
              icon={<RocketIcon />} 
              label="Fast" 
              size="small" 
              sx={{ 
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                color: 'white',
                fontWeight: 600,
              }} 
            />
            <Chip 
              icon={<StarIcon />} 
              label="Secure" 
              size="small" 
              sx={{ 
                background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                color: 'white',
                fontWeight: 600,
              }} 
            />
            <Chip 
              icon={<AutoAwesomeIcon />} 
              label="Easy" 
              size="small" 
              sx={{ 
                background: 'linear-gradient(45deg, #45b7d1, #96c93d)',
                color: 'white',
                fontWeight: 600,
              }} 
            />
          </Stack>
        </Box>
        {/* Social Login Buttons */}
        <Box sx={{ mb: 3 }}>
          <SocialButton
            provider="Google"
            icon={<GoogleIcon />}
            color="#db4437"
            gradient="linear-gradient(135deg, #db4437, #ff6b6b)"
            onClick={() => handleSocialLogin('Google')}
            isLoading={isLoading}
          />
          <SocialButton
            provider="Facebook"
            icon={<FacebookIcon />}
            color="#4267B2"
            gradient="linear-gradient(135deg, #4267B2, #5890ff)"
            onClick={() => handleSocialLogin('Facebook')}
            isLoading={isLoading}
          />
          <SocialButton
            provider="Apple"
            icon={<AppleIcon />}
            color="#000000"
            gradient="linear-gradient(135deg, #434343, #000000)"
            onClick={() => handleSocialLogin('Apple')}
            isLoading={isLoading}
          />
          <SocialButton
            provider="GitHub"
            icon={<GitHubIcon />}
            color="#333"
            gradient="linear-gradient(135deg, #333, #555)"
            onClick={() => handleSocialLogin('GitHub')}
            isLoading={isLoading}
          />
        </Box>
        <Divider sx={{ my: 3 }}>
          <Chip 
            label="OR" 
            size="small" 
            sx={{ 
              background: actualMode === 'light' ? '#f5f5f5' : '#555',
              color: actualMode === 'light' ? '#666' : '#ccc',
              fontWeight: 600,
            }} 
          />
        </Divider>
        {/* Toggle between Sign In / Sign Up */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: actualMode === 'light' ? '#666' : '#ccc',
              mb: 2,
            }}
          >
            {isSignUp ? (
              'Already part of our community?'
            ) : (
              'New to RideShare?'
            )}
          </Typography>
          <Button 
            variant="outlined"
            size="large"
            onClick={toggleMode}
            sx={{
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: `2px solid ${actualMode === 'light' ? '#667eea' : '#f093fb'}`,
              color: actualMode === 'light' ? '#667eea' : '#f093fb',
              '&:hover': {
                background: actualMode === 'light' 
                  ? 'linear-gradient(135deg, #667eea22, #764ba222)'
                  : 'linear-gradient(135deg, #f093fb22, #f5576c22)',
                transform: 'translateY(-2px)',
                boxShadow: actualMode === 'light'
                  ? '0 8px 25px #667eea33'
                  : '0 8px 25px #f093fb33',
              },
            }}
          >
            {isSignUp ? '🔑 Sign In Instead' : '🚀 Create Account'}
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}

// Success animation
function SuccessAnimation() {
  const { actualMode } = useTheme();
  return (
    <Zoom in={true} timeout={500}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            animation: 'successPulse 1s ease-in-out infinite',
            '@keyframes successPulse': {
              '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 #4ecdc444' },
              '50%': { transform: 'scale(1.1)', boxShadow: '0 0 0 20px #4ecdc400' },
              '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 #4ecdc400' },
            },
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 50, color: 'white' }} />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: '#4ecdc4',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Success!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: actualMode === 'light' ? '#666' : '#ccc',
          }}
        >
          Welcome to RideShare! 🎉
        </Typography>
      </Box>
    </Zoom>
  );
}


function LoginModal({ open, onClose, onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { actualMode } = useTheme();

  const toggleMode = () => setIsSignUp((v) => !v);

  const handleSocialLogin = async (provider) => {
    try {
      setIsLoading(true);
      // Simulate loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Simulate authentication process
      const userData = {
        id: Date.now(),
        name: `User from ${provider}`,
        email: `user@${provider.toLowerCase()}.com`,
        provider: provider,
        avatar: `https://ui-avatars.com/api/?name=${provider}&background=1976d2&color=fff`
      };
      setShowSuccess(true);
      setTimeout(() => {
        if (onLogin) {
          onLogin(userData);
        }
        onClose();
        setIsLoading(false);
        setShowSuccess(false);
      }, 1000);
    } catch (error) {
      console.error(`Error logging in with ${provider}:`, error);
      setIsLoading(false);
    }
  };


  const SocialButton = ({ provider, icon, color, onClick }) => (
    <Button
      fullWidth
      variant="outlined"
      size="large"
      startIcon={icon}
      onClick={onClick}
      sx={{
        mb: 2,
        py: 1.5,
        borderColor: color,
        color: actualMode === 'light' ? color : '#fff',
        '&:hover': {
          borderColor: color,
          backgroundColor: actualMode === 'light' 
            ? `${color}10` 
            : 'rgba(255, 255, 255, 0.1)',
        },
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 500,
      }}
    >
      Continue with {provider}
    </Button>
  );

  const AuthContent = ({ isSignUp }) => (
    <Box sx={{ minHeight: 300 }}>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ mb: 3, color: actualMode === 'light' ? '#333' : '#fff' }}
      >
        {isSignUp ? 'Create your account' : 'Welcome back'}
      </Typography>
      
      <Typography 
        variant="body2" 
        align="center" 
        sx={{ mb: 4, color: actualMode === 'light' ? '#666' : '#ccc' }}
      >
        {isSignUp 
          ? 'Sign up to start sharing rides and save money'
          : 'Sign in to access your ride sharing account'
        }
      </Typography>

      <SocialButton
        provider="Google"
        icon={<GoogleIcon />}
        color="#db4437"
        onClick={() => handleSocialLogin('Google')}
      />

      <SocialButton
        provider="Facebook"
        icon={<FacebookIcon />}
        color="#4267B2"
        onClick={() => handleSocialLogin('Facebook')}
      />

      <SocialButton
        provider="Apple"
        icon={<AppleIcon />}
        color="#000000"
        onClick={() => handleSocialLogin('Apple')}
      />

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="textSecondary">
          or
        </Typography>
      </Divider>

      <Typography 
        variant="body2" 
        align="center" 
        sx={{ color: actualMode === 'light' ? '#666' : '#ccc' }}
      >
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <Button 
              variant="text" 
              size="small" 
              onClick={toggleMode}
              sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
            >
              Sign In
            </Button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <Button 
              variant="text" 
              size="small" 
              onClick={toggleMode}
              sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Typography>
    </Box>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'up' }}
      PaperProps={{
        sx: {
          borderRadius: '24px',
          background: actualMode === 'light' 
            ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            : 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
          backdropFilter: 'blur(20px)',
          border: actualMode === 'light' 
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: actualMode === 'light'
            ? '0 20px 60px rgba(0, 0, 0, 0.1)'
            : '0 20px 60px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '600px',
        }
      }}
    >
      {/* Floating particles background */}
      <FloatingParticles theme={actualMode} />
      {/* Modern close button */}
      <IconButton 
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
          background: actualMode === 'light' 
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: actualMode === 'light' 
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(0, 0, 0, 0.7)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent 
        sx={{ 
          p: 4,
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Card
          elevation={0}
          sx={{
            background: 'transparent',
            position: 'relative',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {!showSuccess && (
              <AuthContent 
                isSignUp={isSignUp} 
                toggleMode={toggleMode} 
                handleSocialLogin={handleSocialLogin} 
                isLoading={isLoading}
              />
            )}
            {showSuccess && <SuccessAnimation />}
          </CardContent>
        </Card>
      </DialogContent>
      {/* Footer */}
      {!showSuccess && (
        <Fade in={!showSuccess} timeout={300}>
          <Typography 
            variant="caption" 
            align="center" 
            display="block" 
            sx={{ 
              mt: 4,
              color: actualMode === 'light' ? '#999' : '#aaa',
              fontSize: '0.9rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            🔒 Secure • 🚀 Fast • 🌟 Trusted by thousands
            <br />
            By continuing, you agree to our{' '}
            <Button 
              variant="text" 
              size="small" 
              sx={{ 
                textTransform: 'none', 
                p: 0, 
                minWidth: 'auto',
                color: actualMode === 'light' ? '#667eea' : '#f093fb',
                fontWeight: 600,
              }}
            >
              Terms
            </Button>
            {' '}and{' '}
            <Button 
              variant="text" 
              size="small" 
              sx={{ 
                textTransform: 'none', 
                p: 0, 
                minWidth: 'auto',
                color: actualMode === 'light' ? '#667eea' : '#f093fb',
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </Button>
          </Typography>
        </Fade>
      )}
    </Dialog>
  );
}

export default LoginModal;
