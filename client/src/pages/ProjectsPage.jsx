import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import corporateRetailImage from '../assets/new corporate.jpg';
import healthcareImage from '../assets/new healthcare.jpg';
import hospitalityImage from '../assets/new hospitality.jpg';
import industriesImage from '../assets/new industries.jpg';
import itSectorImage from '../assets/new it.jpg';
import residentialImage from '../assets/new rentals.jpg';
import schoolImage from '../assets/new school.jpg';
import universityImage from '../assets/new university.jpg';

const projectSectors = [
  {
    id: 'it-sector',
    title: 'IT Sector',
    image: itSectorImage,
    projects: [
      'TCS - Gurugram, Haryana',
      'HCL Technologies - Noida, Uttar Pradesh',
      'Tech Mahindra Ltd, NESZ - Noida Phase-II, Uttar Pradesh',
      'NIIT Ltd. - Greater Noida, Uttar Pradesh',
      'NIIT Ltd. - Gurugram, Haryana',
      'Vertex Innovation Park',
      'TCS - Pune, Maharashtra',
      'Cadence Technologies - NESZ, Uttar Pradesh',
      'IBM, Artha SEZ, Tech Zone-IV - Greater Noida, Uttar Pradesh',
      'Adobe - Noida, Uttar Pradesh',
      'Mahindra Worldcity SEZ - Jaipur, Rajasthan',
      'Xansa India - Noida, Uttar Pradesh',
      'Brookfield Candor - Noida, Uttar Pradesh',
      'Hughes India Ltd - Gurugram, Haryana',
      'Perot Systems - Noida, Uttar Pradesh'
    ]
  },
  {
    id: 'university',
    title: 'University',
    image: universityImage,
    projects: [
      'Bennett University - Greater Noida, Uttar Pradesh',
      'BITS Pilani - Pilani, Rajasthan',
      'Namgyal Institute for Ladakhi Culture - Qutub Institutional Area, New Delhi',
      'B.K. Birla Centre for Education - Pune, Maharashtra',
      'Jaypee Institute of Information Technology - Noida, Uttar Pradesh',
      'Jaypee Institute of Information Technology - Waknaghat, Himachal Pradesh',
      'Modern School - Barakhamba Road, New Delhi',
      'IIT Kanpur - Kanpur, Uttar Pradesh',
      'Shiv Nadar School - Noida, Uttar Pradesh',
      'The British School - Chanakyapuri, New Delhi',
      'Shiv Nadar School - Gurugram, Haryana',
      'The American School - Chanakyapuri, New Delhi',
      "Mother's Pride - Indirapuram, Uttar Pradesh",
      'NIIT University - Neemrana, Rajasthan',
      "St. George's School - Alaknanda, New Delhi",
      'Jaipuria School - Lucknow, Uttar Pradesh',
      'Step by Step School - Noida, Uttar Pradesh',
      'Trinity College - Greater Noida, Uttar Pradesh'
    ]
  },
  {
    id: 'schools',
    title: 'Schools',
    image: schoolImage,
    projects: [
      'Bennett University - Greater Noida, Uttar Pradesh',
      'BITS Pilani - Pilani, Rajasthan',
      'Namgyal Institute for Ladakhi Culture - Qutub Institutional Area, New Delhi',
      'B.K. Birla Centre for Education - Pune, Maharashtra',
      'Jaypee Institute of Information Technology - Noida, Uttar Pradesh',
      'Jaypee Institute of Information Technology - Waknaghat, Himachal Pradesh',
      'Modern School - Barakhamba Road, New Delhi',
      'IIT Kanpur - Kanpur, Uttar Pradesh',
      'Shiv Nadar School - Noida, Uttar Pradesh',
      'The British School - Chanakyapuri, New Delhi',
      'Shiv Nadar School - Gurugram, Haryana',
      'The American School - Chanakyapuri, New Delhi',
      "Mother's Pride - Indirapuram, Uttar Pradesh",
      'NIIT University - Neemrana, Rajasthan',
      "St. George's School - Alaknanda, New Delhi",
      'Jaipuria School - Lucknow, Uttar Pradesh',
      'Step by Step School - Noida, Uttar Pradesh',
      'Trinity College - Greater Noida, Uttar Pradesh'
    ]
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    image: hospitalityImage,
    projects: [
      'JW Marriott - Vagator, Goa',
      'Six Senses - Sawai Madhopur, Rajasthan',
      'ITC Grand Bharat - Manesar, Haryana',
      'Andaz by Hyatt - Aerocity, New Delhi',
      'Taj City Centre - Gurugram, Haryana',
      'ITC Grand Bharat - South Goa, Goa',
      'JW Marriott - Jim Corbett, Uttarakhand',
      'Four Points by Sheraton - Amritsar, Punjab',
      'Welcomhotel Rajputana - Jaipur, Rajasthan',
      'Le Meridien - New Delhi',
      'ITC Mughal - Agra, Uttar Pradesh',
      'Hyatt Regency - New Delhi',
      'The Leela Kempinski - Mumbai, Maharashtra',
      'ITC Maurya - New Delhi',
      'The Park Hotel - New Delhi',
      'ITC Kakatiya - Hyderabad, Telangana',
      'Taj Palace - Sardar Patel Marg, New Delhi',
      'WelcomHotel Nedous - Srinagar, Jammu & Kashmir',
      'Park Royal Hotel - Nehru Place, New Delhi',
      'Heritage Village Resort & Spa - Goa',
      'Heritage Village Resort & Spa - Manesar, Gurugram, Haryana',
      'Grand Hyatt - New Delhi',
      'The Metropolitan Hotel - New Delhi',
      'Novotel - Udaipur, Rajasthan',
      'Country Inn & Suites - Katra, Jammu & Kashmir',
      'Radisson Hotel - Noida, Uttar Pradesh',
      'The Imperial - New Delhi',
      'Hyatt Regency - Goa',
      'VIP Guest House - Bhopal, Madhya Pradesh',
      'Centaur Hotel - Palam, New Delhi',
      'Taj Mahal Hotel - Mansingh Road, New Delhi',
      'ITC Windsor (Sheraton) - Bengaluru, Karnataka',
      'Devi Garh Palace - Udaipur, Rajasthan',
      'The Lodhi - New Delhi',
      'Novotel - Hyderabad International Airport, Hyderabad, Telangana',
      'Eros Hotel - Mayur Vihar, New Delhi',
      'Radisson Hotel - Greater Noida, Uttar Pradesh',
      'ibis Hotel - Gurugram, Haryana',
      'The Lalit Resort - Khajuraho, Madhya Pradesh'
    ]
  },
  {
    id: 'corporate-retail',
    title: 'Corporate / Retails',
    image: corporateRetailImage,
    projects: [
      'Select Citywalk - Saket, New Delhi',
      'India Habitat Centre - New Delhi',
      'Maruti Corporate Office - Vasant Kunj, New Delhi',
      'Hindustan Times House - New Delhi',
      'One Horizon Center (Blackstone One Horizon Center) - Gurugram, Haryana',
      'World Bank - Lodhi Estate, New Delhi',
      'American Express Building - New Delhi',
      'India Exposition Mart (IEML) - Greater Noida, Uttar Pradesh',
      'Ansal Plaza - Khel Gaon Road, New Delhi',
      'Canadian High Commission - Chanakyapuri, New Delhi',
      'India International Centre - New Delhi',
      'Punjab National Bank - New Delhi',
      'British Council - K.G. Marg, New Delhi',
      'Embassy of Egypt - New Delhi',
      'National Dairy Development Board - Anand, Gujarat',
      'U.P. Sadan - Chanakyapuri, New Delhi',
      'Bharat Petroleum Corporation Ltd. - Noida, Uttar Pradesh',
      'INCL - Sadiq Nagar, New Delhi',
      'Oil Industry Development Board (OIDB) - Noida, Uttar Pradesh',
      'British High Commission - Kolkata, West Bengal',
      'World Wide Fund for Nature (WWF) - Lodhi Road, New Delhi',
      'Patna Airport - Patna, Bihar',
      'IFCI Building - Nehru Place, New Delhi',
      'NDDB - Bhopal, Madhya Pradesh',
      'Shriram Centre for Performing Arts - New Delhi',
      'Bharti Cellular Ltd. - New Delhi',
      'Escorts Corporate Office - Faridabad, Haryana',
      'NTPC Power Management Institute - Noida, Uttar Pradesh',
      'Porritts & Spencer (Asia) Ltd. - Faridabad, Haryana',
      'Lotus Temple (Bahai House of Worship) - New Delhi',
      'Embassy of Italy - Chanakyapuri, New Delhi',
      'Essar Cellular - New Delhi',
      'Ford Foundation - New Delhi',
      'ISKCON Temple - New Delhi',
      'Pharmax Corporation - Okhla, New Delhi',
      'Asian Development Bank - Chanakyapuri, New Delhi',
      'Bangladesh High Commission - Chanakyapuri, New Delhi',
      'Technip India Ltd. - Noida, Uttar Pradesh',
      'Apostolic Nunciature (Vatican Embassy) - Chanakyapuri, New Delhi',
      'ITC Green Centre - Gurugram, Haryana'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    image: healthcareImage,
    projects: [
      'Medanta - Gurugram, Haryana',
      'Artemis Hospital - Gurugram, Haryana',
      'Fortis Hospital - Gurugram, Haryana',
      'Apollo Hospital - New Delhi',
      'Max Super Speciality Hospital - Saket, New Delhi',
      "St. Stephen's Hospital (Mother & Child Block) - New Delhi",
      'ESI Hospital - Okhla Phase I, New Delhi',
      'Fortis Hospital - Shalimar Bagh, New Delhi',
      'Sri Jayadeva Institute of Cardiovascular Sciences - Bengaluru, Karnataka',
      'Fortis Escorts Heart Institute - New Delhi',
      'Apollo Gleneagles Hospital - Kolkata, West Bengal',
      'Sarvodaya Hospital - Faridabad, Haryana',
      'Khosla Hospital - Shalimar Bagh, New Delhi',
      'Fortis Escorts Hospital - Amritsar, Punjab',
      'Ojas Hospital - Faridabad, Haryana',
      'ICare Hospital - Noida, Uttar Pradesh',
      'Sir Ganga Ram Hospital - New Delhi',
      'Metro Hospital - Faridabad, Haryana',
      'Fortis Escorts Super Speciality Hospital - Jaipur, Rajasthan',
      'Apollo Hospital - Ludhiana, Punjab',
      'Jaipur Golden Hospital - Rohini, New Delhi',
      'Rajiv Gandhi Cancer Institute - Rohini, New Delhi',
      'Fortis Hospital - Noida, Uttar Pradesh',
      'Punjab Institute of Medical Sciences - Jalandhar, Punjab',
      'BLK-Max Super Speciality Hospital - New Delhi',
      'Umkal Hospital - Gurugram, Haryana'
    ]
  },
  {
    id: 'industries',
    title: 'Industries',
    image: industriesImage,
    projects: [
      'Hero MotoCorp - Haridwar, Uttarakhand',
      'PepsiCo India - Patiala, Punjab',
      'Supreme Industries Ltd. - Malanpur, Gwalior, Madhya Pradesh',
      'National Bearing Company (NBC) - Jaipur, Rajasthan',
      'Hero MotoCorp R&D - Kukas, Rajasthan',
      'Salora International Ltd. (National Panasonic Division) - Noida, Uttar Pradesh',
      'Hero MotoCorp - Neemrana, Rajasthan',
      'Heinz India Ltd. - Aligarh, Uttar Pradesh',
      'Stellantis Apparel Brands Ltd. - Noida, Uttar Pradesh',
      'Gillette India Ltd. - Bhiwadi, Rajasthan',
      'Yamaha Motor India - Surajpur, Uttar Pradesh',
      'Dixon Technologies - Dehradun, Uttarakhand',
      'Invell Transmission - Faridabad, Haryana',
      'Willmar Schwabe India - Noida, Uttar Pradesh',
      'Shahi Exports - Faridabad, Haryana',
      'Fujitsu Optel Ltd. - Bhopal, Madhya Pradesh',
      'Perfetti Van Melle India - Manesar, Haryana',
      'Honda Motorcycle & Scooter India - Manesar, Haryana',
      'Eicher Tractors - Faridabad, Haryana',
      'Nestle India - Samalkha, Haryana',
      'Cargo Motors Ltd. - Jalandhar, Punjab',
      'Sudhir Power Ltd. - Gurugram, Haryana',
      'Chambal Fertilisers & Chemicals Ltd. - Kota, Rajasthan',
      'GKN Driveline India Ltd. - Faridabad, Haryana',
      'Abhishek Industries Ltd. - Ludhiana, Punjab',
      'Pricol Ltd. - Haryana',
      'Jaiprakash Cement - Bhageri, Himachal Pradesh',
      'Napino Auto & Electronics - SIDCUL, Haridwar, Uttarakhand',
      'Escorts Ltd. (Motorcycle & Scooter Division) - Faridabad, Haryana',
      'Jaiprakash Cement - Panipat, Haryana',
      'Samtel Ltd. - Ghaziabad, Uttar Pradesh',
      'Sharda Containers - Noida, Uttar Pradesh',
      'Invell Transmission - Dharuhera, Haryana',
      'DCM Engineering Ltd. - Surajpur, Uttar Pradesh',
      'DCM Benetton India Ltd. - Manesar, Haryana',
      'Oswal Industries - Gurugram, Haryana'
    ]
  },
  {
    id: 'rentals',
    title: 'Rentals',
    image: residentialImage,
    projects: [
      'ITC Laburnum - Gurugram, Haryana',
      'Malibu Town - Gurugram, Haryana',
      'Welcomgroup Housing Complex - Gurugram, Haryana',
      'Tata House - Prithviraj Road, New Delhi',
      'Eldeco Greens - Greater Noida, Uttar Pradesh',
      'Amstoria (BPTP) - Gurugram, Haryana',
      'Diplomatic Greens (Puri Construction) - Gurugram, Haryana',
      'Park Spacio (BPTP) - Gurugram, Haryana',
      'Time Residency - Gurugram, Haryana',
      'Park Life (BPTP) - Gurugram, Haryana',
      'Park Serene (BPTP) - Gurugram, Haryana',
      'Commonwealth Games Village - New Delhi',
      'The Verandas - Gurugram, Haryana',
      'Anand Vilas (Puri Construction) - Faridabad, Haryana',
      'M3M Urbana - Gurugram, Haryana',
      'Raheja Aria - Gurugram, Haryana',
      'Park Generation (BPTP) - Gurugram, Haryana',
      'BPTP Discovery Park - Faridabad, Haryana',
      'The Hive (Satya Developers) - Gurugram, Haryana',
      'Omaxe Grandwood - Noida, Uttar Pradesh',
      'High-End Farmhouses - Westend Green Farms, Rajokri, New Delhi',
      'High-End Farmhouses - DLF Chattarpur Farms, New Delhi',
      'High-End Farmhouses - Ghitorni, New Delhi',
      'High-End Farmhouses - Satbari, New Delhi',
      'High-End Farmhouses - Pushpanjali Farms, New Delhi',
      'High-End Farmhouses - Green Avenue, Vasant Kunj, New Delhi',
      'High-End Residences - Amrita Sher-Gil Marg, New Delhi',
      'High-End Residences - Hailey Road, New Delhi',
      'High-End Residences - Malcha Marg, New Delhi',
      'High-End Residences - Aurangzeb Road, New Delhi',
      'High-End Residences - Chandigarh',
      'High-End Residences - Jaipur, Rajasthan',
      'High-End Residences - Dehradun, Uttarakhand',
      'High-End Residences - Raipur, Chhattisgarh',
      'High-End Residences - Shimla, Himachal Pradesh',
      'High-End Residences - Friends Colony, Golf Links, Jor Bagh, New Friends Colony, Maharani Bagh, East of Kailash, Greater Kailash I & II, New Delhi'
    ]
  }
];

function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const [activeSectorId, setActiveSectorId] = useState(projectSectors[0].id);

  useEffect(() => {
    const requestedSector = searchParams.get('sector');

    if (!requestedSector) {
      return;
    }

    const matchedSector = projectSectors.find((sector) => sector.id === requestedSector);

    if (matchedSector) {
      setActiveSectorId(matchedSector.id);
    }
  }, [searchParams]);

  const activeSector =
    projectSectors.find((sector) => sector.id === activeSectorId) ?? projectSectors[0];

  return (
    <main className="section page-content">
      <section className="projects-tabs-section">
        <div className="projects-tab-bar" role="tablist" aria-label="Project sectors">
          {projectSectors.map((sector) => (
            <button
              key={sector.id}
              type="button"
              role="tab"
              className={`projects-tab ${sector.id === activeSector.id ? 'active' : ''}`}
              aria-selected={sector.id === activeSector.id}
              onClick={() => setActiveSectorId(sector.id)}
            >
              {sector.title}
            </button>
          ))}
        </div>

        <div className="projects-tab-panel" role="tabpanel">
          <div className="projects-tab-hero">
            <img
              className="projects-tab-hero-image"
              src={activeSector.image}
              alt={activeSector.title}
            />
            <div className="projects-tab-hero-copy">
              <p className="eyebrow">Project Sector</p>
              <h1>{activeSector.title}</h1>
              <p className="page-text">
                A curated view of our work in the {activeSector.title.toLowerCase()} category,
                featuring delivery-focused projects with strong execution and finish quality.
              </p>
            </div>
          </div>

          <div className="projects-list-panel">
            <span>{activeSector.projects.length} Projects</span>
            <ul className="projects-name-list">
              {activeSector.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
