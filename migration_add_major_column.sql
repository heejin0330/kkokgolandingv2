-- pre_registrations 테이블에 major(관심학과) 컬럼 추가
-- 기존 interest 컬럼은 관심분야(마이스터고+특성화고, 마이스터고, 특성화고)로 사용
-- 새로 추가되는 major 컬럼은 관심학과(IT/소프트웨어, 기계/자동화 등)로 사용

ALTER TABLE pre_registrations
ADD COLUMN IF NOT EXISTS major TEXT;

-- 기존 데이터가 있는 경우를 위한 설명
-- 기존 interest 컬럼의 데이터는 관심학과 데이터였으므로, 
-- 필요시 아래 쿼리로 기존 데이터를 major 컬럼으로 마이그레이션할 수 있습니다:
-- 
-- UPDATE pre_registrations 
-- SET major = interest 
-- WHERE major IS NULL AND interest IS NOT NULL;
--
-- 주의: 이 마이그레이션은 기존 데이터의 interest 값을 major로 복사합니다.
-- interest 컬럼은 이후 관심분야(마이스터고+특성화고 등)로 사용되므로,
-- 기존 데이터의 interest 값은 NULL로 설정하거나 적절한 값으로 업데이트해야 할 수 있습니다.
