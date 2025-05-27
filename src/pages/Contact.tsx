import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: '이메일',
    content: 'jmjm6415@gmail.com',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: '전화번호',
    content: '+82 10-7588-6415',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: '위치',
    content: '부산광역시 수영구',
  },
];

const Contact = () => {
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
              variant="h2"
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
              }}
            >
              연락하기
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              align="center"
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
            >
              프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든지 연락주세요
            </Typography>
          </motion.div>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                    연락처 정보
                  </Typography>
                  <Grid container spacing={3}>
                    {contactInfo.map((info, index) => (
                      <Grid item xs={12} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: '12px',
                              bgcolor: 'rgba(99, 102, 241, 0.1)',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'translateX(8px)',
                              },
                            }}
                          >
                            <Box sx={{ color: 'primary.main', mr: 2 }}>
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {info.title}
                              </Typography>
                              <Typography color="text.secondary">
                                {info.content}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 