"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_so_dto_1 = require("./create-so.dto");
class UpdateSoDto extends (0, mapped_types_1.PartialType)(create_so_dto_1.CreateSoDto) {
}
exports.UpdateSoDto = UpdateSoDto;
//# sourceMappingURL=update-so.dto.js.map