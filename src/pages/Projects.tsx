import { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

// 이미지 import
import project1Thumb from '../img/projectImg/1_khoa.png';
import project1Detail1 from '../img/projectImg/1_khoa.png';
import project1Detail2 from '../img/projectImg/1_khoa2.png';
import project1Detail3 from '../img/projectImg/1_khoa3.png';

import project2Thumb from '../img/projectImg/2_kofdi.png';
import project2Detail1 from '../img/projectImg/2_kofdi.png';
import project2Detail2 from '../img/projectImg/2_kofdi2.png';
import project2Detail3 from '../img/projectImg/2_kofdi3.png';

import project3Thumb from '../img/projectImg/3_oceanmap.png';
import project3Detail1 from '../img/projectImg/3_oceanmap.png';

import project4Thumb from '../img/projectImg/4_marine.png';
import project4Detail1 from '../img/projectImg/4_marine.png';
import project4Detail2 from '../img/projectImg/4_marine2.png';
import project4Detail3 from '../img/projectImg/4_marine3.png';

import project5Thumb from '../img/projectImg/5_oceanmap.png';
import project5Detail1 from '../img/projectImg/5_oceanmap.png';
import project5Detail2 from '../img/projectImg/5_oceanmap2.png';

import project6Thumb from '../img/projectImg/6_tp.png';
import project6Detail1 from '../img/projectImg/6_tp.png';
import project6Detail2 from '../img/projectImg/6_tp2.png';
import project6Detail3 from '../img/projectImg/6_tp3.png';

import project7Thumb from '../img/projectImg/7.ioc.png.jpg';
import project7Detail1 from '../img/projectImg/7.ioc.png.jpg';
import project7Detail2 from '../img/projectImg/7.ioc2.png.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  detailImages: string[];
  myPart: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '국립해양조사원 누리집 리뉴얼',
    description: '새로운 누리집 메뉴구성에 맞게 (구)누리집 기능 이관 및 신규기능 추가',
    image: project1Thumb,
    technologies: ['Java', 'JavaScript', 'PostgreSQL', 'Oracle'],
    demo: 'https://example.com/portfolio',
    detailImages: [project1Detail1, project1Detail2, project1Detail3],
    myPart: '주로 프론트엔드 개발에서 JavaScript를 담당하며, (구)누리집의 게시글 등록 시 암호화 및 복호화 기능이 없던 문제를 해결했습니다. 문자 인증 과정에서 취약점이 발견되어 Burp Suite 등 프록시 도구를 활용해 서버로 전송되는 데이터를 점검하고, 암호화된 인증번호와 휴대폰 번호를 비교하는 방식으로 문제를 해결했습니다. 신입 개발자로서 보안 취약점을 이해하고 대응하는 데 시간이 걸렸지만, 이를 통해 데이터 흐름과 보안에 대한 깊은 이해를 갖추게 되었습니다. 이후 유사한 문제를 사전에 예방하며, 보안을 고려한 설계를 통해 안정적인 배포를 완료했습니다. 이러한 경험은 보안 지식과 신중한 개발 역량을 크게 향상시키는 계기가 되었습니다.'
  },
  {
    id: 2,
    title: '국립해양조사원 의사결정시스템 유지보수',
    description: '의사결정시스템 속 보고서 생성 기능 (한글파일) 및 NC파일 파싱 후 해수유동 표출 등 기능수정 및 추가',
    image: project2Thumb,
    technologies: ['Java', 'JavaScript', 'PostgreSQL', 'Oracle', 'GeoServer', 'OpenLayers'],
    demo: 'https://example.com/shopping',
    detailImages: [project2Detail1, project2Detail2, project2Detail3],
    myPart: '의사결정 시스템의 보고서 생성 기능 개발 과정에서 태풍, 해양사고 등 주요 데이터를 활용해 HWP 파일로 시각화하는 기술을 구현했습니다. HTML 기반의 한글 파일 구조를 이해하고, 그래프와 표를 효율적으로 표현하기 위해 테스트 코드를 반복 작성하며 실험을 통해 기술적 완성도를 높였습니다. 또한, NC 파일 파싱과 해양 데이터 시각화 작업에서는 QGIS를 활용해 데이터를 분석하고, 이를 JSON 형식으로 변환한 뒤 Mohid 시스템에서 해수유동 데이터를 표출하는 데 성공했습니다. 처음 접하는 NC 파일과 QGIS에 익숙해지기 위해 많은 학습과 실험이 필요했으나, 이를 통해 정확한 데이터 파싱 및 시각화 역량을 갖추게 되었습니다. 이러한 경험은 문제 해결 능력과 새로운 기술에 대한 적응력을 강화했으며, 복잡한 시스템의 기능 구현과 최적화에 필요한 기술적 통찰력을 키우는 데 기여했습니다.'
  },
  {
    id: 3,
    title: '국립해양조사원 해양정보활용시스템 유지보수 및 서버관리',
    description: ' 서버 취약점 대응 및 유지보수에 대한 파일 배포',
    image: project3Thumb,
    technologies: ['Linux(redhat)', 'PostgreSQL', 'Oracle'],
    demo: 'https://example.com/social',
    detailImages: [project3Detail1],
    myPart: '국립해양조사원에서 개방해 공유 서버 등 총 5개의 서버를 관리한 경험이 있습니다. 이 서버들은 Linux 기반이었기 때문에 초기에는 생소한 명령어들을 이해하는 데 어려움이 있었습니다. 그러나 서버에 대한 이해도가 깊어지면서 개발뿐만 아니라 서버 관리, 보안 등 여러 측면에서 해당 기술의 중요성을 깨닫게 되었습니다. 이 경험을 통해 Linux에 대한 관심이 높아졌고, 이를 바탕으로 내년 2025년에는 리눅스마스터 자격증을 취득하기 위해 현재 열심히 공부 중입니다. Linux 시스템에 대한 이해와 관리 능력을 더욱 강화하여, 향후 더욱 효율적이고 안정적인 서버 관리 및 개발 업무를 수행할 수 있도록 준비하고 있습니다.'
  },
  {
    id: 4,
    title: '국립해양측위정보원 누리집 리뉴얼',
    description: '새로운 누리집 메뉴구성에 맞게 (구)누리집 기능 이관 및 신규기능 추가',
    image: project4Thumb,
    technologies: ['Java', 'JavaScript', 'PostgreSQL', 'Oracle', 'OpenLayers'],
    demo: 'https://example.com/marine',
    detailImages: [project4Detail1, project4Detail2, project4Detail3],
    myPart: '국립해양측위정보원의 통계 기능을 신규 개발하며, 대용량 데이터를 다룬 경험이 있습니다. 해당 사업에서는 여러 관측소, 기간, 그리고 다양한 데이터를 포함한 통계 기능을 개발해야 했습니다. 이전에도 대용량 데이터를 다룬 경험이 있었지만, 이 사업에서 다룬 데이터는 DB에 인덱스가 전혀 없었습니다. 인덱스가 존재한다고 가정하고 작업을 시작한 저는, 대용량 데이터에 인덱스를 추가하는 과정에서 DB나 서버가 다운될 수 있는 위험을 미리 인지하고 있었습니다. 이를 해결하기 위해, 배포 전 임시 서버를 구축하여 새로운 인덱스를 생성한 후, 임시 서버와 본 서버를 교체하는 방법을 제시했습니다. 이 방법을 통해 데이터 손실 없이 문제없이 배포가 완료되었습니다. 해당 경험을 통해 대용량 데이터 처리, 서버 안정성 관리에 대한 중요한 교훈을 얻었으며, 실제 배포 시 예상되는 문제를 미리 파악하고 대응할 수 있는 능력을 키울 수 있었습니다.'
  },
  {
    id: 5,
    title: '국립해양조사원 해양정보활용시스템 개선사업',
    description: '내부시스템 공유해 카테고리 재정의',
    image: project5Thumb,
    technologies: ['Java', 'JavaScript', 'PostgreSQL', 'Oracle'],
    demo: 'https://example.com/autonomous',
    detailImages: [project5Detail1, project5Detail2],
    myPart: '2024년 7월부터 서울의 타 회사에 합류하여 내부망 시스템인 공유해 카테고리 재정의 기능을 담당하게 되었습니다. 그동안 서버 유지보수를 수행해왔지만, 공유해 기능 개선을 위해 소스코드를 직접 다루는 것은 처음이라 해당 소스를 이해하는 데 시간이 많이 소요되었습니다. 현재 카테고리 재정의 기능은 완료되었으며, 공유해 소스코드를 보며 일관성을 유지하기 위해 최대한 기존의 변수명과 코딩 규칙을 따르면서 작업을 진행하고 있습니다. 이 과정에서 기존 코드와의 일관성을 맞추는 것에 중점을 두어, 개발 환경에 빠르게 적응하고 있습니다.'
  },
  {
    id: 6,
    title: '연구사업 API 수집 프로그램',
    description: '연구사업 API 수집 프로그램/페이지 구축',
    image: project6Thumb,
    technologies: ['Java', 'Spring Boot', 'React','PostgreSQL'],
    demo: 'https://example.com/weather',
    detailImages: [project6Detail1, project6Detail2, project6Detail3],
    myPart: '현재 재직 중인 회사의 연구사업 중 하나인 국립해양조사원의 바다누리 API 수집 프로그램 개발에서 담당자로 선정되어 프로젝트를 이끌었습니다. 저는 DB 설계 및 구축부터 프로그램 개발까지, 프로젝트의 전반적인 업무를 팀원 2명과 함께 주도적으로 진행하였습니다.개발 과정에서는 서울 장기 출장과 프로젝트 일정 축소라는 어려움이 있었지만, 프로젝트 리더로서 격일 주간마다 진행 상황을 체크하고, 팀원들의 역할을 명확히 분배하여 효율적인 일정 관리를 통해 작업을 원활하게 진행할 수 있었습니다.이 프로젝트는 제가 처음 맡은 프로젝트 리더 역할이라, 팀원들에게 일을 분배하고 상황을 체크하는 데 부담이 많이 되었지만, 팀원들이 적극적으로 협력해 준 덕분에 프로젝트를 성공적으로 마무리할 수 있었습니다. 이 경험을 통해 팀워크와 리더십의 중요성을 다시 한 번 느끼고, 더 나은 프로젝트 관리 능력을 갖추게 되었습니다. 차후 다른 프로젝트의 리더가 되더라도 해당 프로젝트를 했던 경험을 떠올리며 더욱 잘 할 자신감을 키우게 되었습니다.'
  },
  {
    id: 7,
    title: '연구사업 스마트 선박 (항구 정박 컬럼 재정의)',
    description: '연구사업 스마트선박 정박관련 컬럼 재정의',
    image: project7Thumb,
    technologies: ['marine knowledge'],
    demo: 'https://example.com/mobile',
    detailImages: [project7Detail1, project7Detail2],
    myPart: '현재 재직 중인 회사의 연구사업 중 하나인 스마트 선박 과업의 항구 정박 관련 컬럼을 재정의 하는 중 입니다. ISO(국제 표준화 기구)의 규칙을 따르며 S-100, S-131등 선박관련 외국계 논문을 조사하고 최근 5월에 주최된 ICMASS 2025 국제 자율운항선박 컨퍼런스에 참석을 하며 견문을 넓히고 선박이 부두에 정박 시 필요한 자료에 대한 컬럼을 추가 및 수정 진행 중 입니다.'
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth * 0.8;
        const maxScroll = container.scrollWidth - container.offsetWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'width=800,height=600');
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
      py: 8,
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
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
              color: 'primary.main',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
            }}
          >
            프로젝트
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            align="center"
            sx={{ 
              mb: 8, 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            제가 작업한 주요 프로젝트들을 소개합니다
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                    },
                    minHeight: '650px',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      objectFit: 'cover',
                      borderTopLeftRadius: '24px',
                      borderTopRightRadius: '24px',
                      imageRendering: 'optimizeQuality',
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                      width: '100%',
                      aspectRatio: '16/9',
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    <Box>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          mb: 3,
                          color: 'primary.main',
                          fontSize: '1.5rem',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          mb: 4,
                          lineHeight: 1.8,
                          fontSize: '1.2rem',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 4 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="medium"
                            sx={{
                              mr: 1,
                              mb: 1,
                              bgcolor: 'rgba(99, 102, 241, 0.1)',
                              color: 'primary.main',
                              fontWeight: 500,
                              fontSize: '1rem',
                              height: '36px',
                              '&:hover': {
                                bgcolor: 'rgba(99, 102, 241, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="contained"
                        onClick={() => handleOpenDialog(project)}
                        sx={{ 
                          width: '100%',
                          py: 2.5,
                          borderRadius: '12px',
                          textTransform: 'none',
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      >
                        상세 보기
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={!!selectedProject}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ 
              pb: 2,
              color: 'primary.main',
              fontWeight: 600,
            }}>
              {selectedProject.title}
              <IconButton
                onClick={handleCloseDialog}
                sx={{ 
                  position: 'absolute', 
                  right: 16, 
                  top: 16,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {selectedProject.detailImages.map((image, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        cursor: 'pointer',
                        '&:hover .zoom-icon': {
                          opacity: 1,
                        },
                      }}
                      onClick={() => handleImageClick(image)}
                    >
                      <Box
                        component="img"
                        src={image}
                        alt={`${selectedProject.title} 상세 이미지 ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: '200px',
                          borderRadius: '16px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: 'rgba(0, 0, 0, 0.5)',
                          borderRadius: '50%',
                          p: 1,
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      >
                        <ZoomInIcon sx={{ color: 'white', fontSize: 32 }} />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 4 }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  담당 파트
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  {selectedProject.myPart}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Button 
                onClick={handleCloseDialog}
                variant="contained"
                sx={{ 
                  borderRadius: '12px',
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                }}
              >
                닫기
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Dialog
        open={!!selectedImage}
        onClose={handleCloseImage}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          }
        }}
      >
        {selectedImage && (
          <>
            <IconButton
              onClick={handleCloseImage}
              sx={{ 
                position: 'absolute', 
                right: 16, 
                top: 16,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={selectedImage}
              alt="확대된 이미지"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 