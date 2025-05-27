import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import { useNavigate } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: '깔끔한 코드',
    description: '유지보수가 용이하고 확장 가능한 백엔드 코드를 작성합니다.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: '쿼리 튜닝',
    description: '데이터베이스 성능 최적화와 효율적인 쿼리 작성을 전문으로 합니다.',
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: '서버 관리',
    description: 'Linux 서버 운영 및 관리, 시스템 안정성 확보에 능숙합니다.',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              component="h1"
              gutterBottom
              align="center"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              안녕하세요, 백엔드 개발자입니다
            </Typography>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              color="text.secondary"
              paragraph
              align="center"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Java와 Spring을 기반으로 한 안정적인 백엔드 시스템 구축을 전문으로 합니다.
              데이터베이스 최적화와 서버 운영에 대한 깊은 이해를 바탕으로
              효율적이고 확장 가능한 시스템을 설계합니다.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: { xs: 6, md: 8 },
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/projects')}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                프로젝트 보기
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                연락하기
              </Button>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '16px',
                      bgcolor: 'background.paper',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        p: 2,
                        borderRadius: '12px',
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 