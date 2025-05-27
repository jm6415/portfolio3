import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import MapIcon from '@mui/icons-material/Map';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import myPic from '../img/myPic.jpg';

const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: '프로그래밍 언어',
    description: 'Java, JavaScript',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: '데이터베이스',
    description: 'Oracle, MariaDB, PostgreSQL',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: '서버/클라우드',
    description: 'Linux(RedHat), AWS',
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: '버전 관리',
    description: 'Git, SVN',
  },
  {
    icon: <MapIcon sx={{ fontSize: 40 }} />,
    title: 'GIS 시스템',
    description: 'OpenLayers, GeoServer',
  },
  {
    icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
    title: '문서화/협업',
    description: 'Notion, Jira',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
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
            소개
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            align="center"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            백엔드 개발자로서의 제 이야기를 들려드립니다
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Avatar
                  src={myPic}
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1',
                    maxWidth: 400,
                    mb: 3,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    objectFit: 'cover',
                    '& img': {
                      objectFit: 'cover',
                      transform: 'scale(1.2) translateY(-10%)',
                    },
                  }}
                />
                <Typography variant="h4" gutterBottom>
                  강재민
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  백엔드 개발자
                </Typography>
              </Box>
            </motion.div>
          </Grid>
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
                <Typography variant="h5" gutterBottom>
                  자기소개
                </Typography>
                <Typography paragraph color="text.secondary" sx={{ mb: 4, whiteSpace: 'pre-line' }} >
                    안녕하세요! 저는 4년차 백엔드 개발자입니다.{"\n"}
                    해양 관련분야에 특화된 일렉오션이라는 기업에서 웹개발(백엔드)를 담당하고 있습니다.
                    해양 관련이기에 지도와 관련된 오픈레이어, 지오서버 등 지도관련 기술을 보유하고있습니다.
                    새로운 기술을 배우는 것을 좋아하며, 팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  경력 및 교육
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    경력) 일렉오션 2021.07 - 재직중
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    • 국가사업 위주의 해양관련 사업을 진행 및 해양관련 연구사업 참여
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    교육
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography color="text.secondary">
                      • 인프런 강의 AWS, NEXT.js
                    </Typography>
                    <Typography color="text.secondary">
                      • ICMASS 2025 국제 자율운항선박 컨퍼런스에 참석
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: 600 }}
        >
          기술 스택
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: '16px',
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
                    {skill.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 