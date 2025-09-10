# TODO: Verify and Update Logo Fetching from Backend Service

## Current Status
- Logo in navbar is now fetched from backend service URL defined in environment.ts
- Backend API URL: `http://alisoncollegeen.runasp.net/api/v1/`
- Logo endpoint: `/api/v1/logos/getall`

## Plan
1. Update FacultyInfoService to fetch faculty info from backend API endpoint
2. Modify NavbarComponent to use backend service URL for logo if available
3. Ensure logo URL is properly constructed using environment API URL
4. Test the logo loading from backend service

## Dependent Files
- src/app/features/colleges/Al-Alsun/Services/faculty-info.service.ts
- src/app/features/colleges/Al-Alsun/Pages/shared/navbar/navbar.component.ts
- src/environments/environment.ts

## Next Steps
- [x] Update FacultyInfoService to fetch faculty info from backend
- [x] Update NavbarComponent to use backend logo URL
- [ ] Verify logo loads successfully from backend service
